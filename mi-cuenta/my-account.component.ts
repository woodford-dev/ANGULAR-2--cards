import { Component, OnInit } from '@angular/core';
import { MyAccountService } from './my-account.service';

import { Order } from './order/order.model';
import { Frame } from './frame/frame.model';
import { LensPackage } from './frame/lens-package/lens-package.model';
import { Lens } from './frame/lens-package/lens.model';
import { LensOption } from './frame/lens-package/lens-option.model';
import { ContactLens } from './contact-lens/contact-lens.model';

import { environment } from '../../environments/environment';

@Component({
  selector: 'ss-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.less'],
})

export class MyAccountComponent implements OnInit {

  public cardContent: any;
  public orders: any;

  errorMessage: string;

  constructor(private service: MyAccountService) { }

  ngOnInit() {

    this.service.getRecent().subscribe( ( result ) => {
      this.processOrders( result );
      this.cardContent = this.fetchData(result);
    });
  }

  fetchData(response) {
    
    let data : any;

    data = response.results.myaccount_events_v1.events;

    let myAccountMessages = (!data) ? [] : data;
   
    let cards = [];
    if (!myAccountMessages) {
      return [];
    }
    for ( let i = 0; i < myAccountMessages.length; i++ ) {

      let messageData = myAccountMessages[ i ];
      let productData = this.generateArray(messageData );
      let products = [];

 
      if ( productData && productData.length > 0 ) {

        for ( let j = 0; j < productData.length; j++ ) {

          let product = productData[ j ];

          if ( product.lenses && product.lenses.length > 0 ) {

            let lensData = product.lenses;

            for ( let k = 0; k < lensData.length; k++ ) {

              let productLensData = lensData[ k ];

              let lens = {
                  hidden: 0,
                  quantity: productLensData.quatity,
                  label: productLensData.side,
                  unitPrice: productLensData.price,
                  title: product.name,
                  brand: product.brand,
                  totalPrice: product.total,
                  totalFormatted: product.total
                };

                let model = new ContactLens( lens );

              products.push( model );
            }
          }

        }
      } else {
        products = [];
      }

      let card = {
        title: messageData.title,
        publishOn: messageData.publishOn,
        status: messageData.status,
        type: messageData.type,
        icon: messageData.icon,
        contents:  messageData.contents,
        products: products,
        ctas: this.generateArray( messageData.ctas )
      };

      cards.push( card );

    }
    return cards;
  };

 

  public processOrders( response ): any {
    let products = [];
    let orders = [];
    let ctas = [];
    let mostRecentOrder;
    let issueDate;

    if ( response.results ){
      if ( response.results.success === false && environment.production ) {
        return {};
      }

      let data;

      if ( response.results instanceof Array ){
        data = response.results;
      }
      else{
        data = [ response.results ];
      }

      for ( let order of data ) {

        let products = this.processOrderProducts( order );

        if ( products.length > 0 ){
          let discountPrice, discountPriceFormatted ;
          let recentlyOrdered = order.recently_ordered;

          if ( order.de_order_discount ){
            discountPrice = order.de_order_discount[0].unitPrice;
            discountPriceFormatted = order.de_order_discount[0].unitPriceFormatted;
          }

          orders.push( new Order({
            id: recentlyOrdered.orderId,
            number: recentlyOrdered.orderNumber,
            state: recentlyOrdered.state,
            stateTitle: recentlyOrdered.stateTitle,
            status: recentlyOrdered.status,
            statusTitle: recentlyOrdered.statusTitle,
            created: recentlyOrdered.created,
            updated: recentlyOrdered.updated,
            source: recentlyOrdered.orderSource,
            sourceTitle: recentlyOrdered.orderSourceTitle,
            type: recentlyOrdered.orderType,
            typeTitle: recentlyOrdered.orderTypeTitle,
            aftercareStoreEpos: recentlyOrdered.aftercareStoreEpos,
            aftercareStoreName: recentlyOrdered.aftercareStoreName,
            total: recentlyOrdered.total,
            totalFormatted: recentlyOrdered.totalFormatted,
            expressReorder: recentlyOrdered.expressReorder,
            products: products
          }) );
          mostRecentOrder = orders[0];
          products = mostRecentOrder.products[0];
          issueDate = parseInt(mostRecentOrder.created, 10);
          this.orders = orders;
        }
        else {
          this.orders = {};
        }
      }  
    }
  }

    public processOrderProducts( order ): any {
      let data = [];
      let orderProduct = order.recently_ordered;
      let recentlyOrderedProduct = orderProduct.product;

      for ( let product of recentlyOrderedProduct ) {
      
        if ( product.productType == "contact_lens_sku" ){
         
          data.push( new ContactLens({
            hidden: 0,
            quantity: product.quantity,
            eye: product.eyeLabel,
            label: product.label,
            price: product.unitPriceFormatted,
            title: product.product.title,
            brand: product.product.brand,
            totalFormatted: order.recently_ordered.totalFormatted,
            totalPrice: orderProduct.total,
            plu: product.product.plu,
            type: product.productType
          }) );
        }
        else if (product.productType == "frame_sku"){
          
          let lensPackageModel, lensModel, lensOptionModels;

          if ( product.lens_package ){

            if ( product.lens_package.lens ){
              let lens = {
                sku: product.lens_package.lens.sku,
                title: product.lens_package.lens.title,
                price: product.lens_package.lens.price,
                priceFormatted: product.lens_package.lens.priceFormatted,
              }
              lensModel = new Lens( lens );
            }
            else{
              lensModel = {};
            }
            if ( product.lens_package.options && product.lens_package.options.length > 0 ){

              lensOptionModels = [];

              for ( let lensOption of product.lens_package.options ) {
                lensOptionModels.push( new LensOption( lensOption ) );

              }
            }

            let lensPackage = {
              total: product.lens_package.total,
              totalFormatted: product.lens_package.totalFormatted,
              lens: lensModel,
              lensOptions: lensOptionModels
            }

            lensPackageModel = new LensPackage( lensPackage );
          }
          else{
            lensPackageModel = {};
          }

          data.push( new Frame({
            hidden: 0,
            quantity: product.quantity,
            label: product.label,
            price: product.unitPriceFormatted,
            title: product.product.title,
            brand: product.product.brand,
            totalPrice: order.total,
            type: product.productType,
            lensPackage: lensPackageModel,
            sku: product.product.sku
          }) );
        }
      }

      return data;
  }

  buttonClicked(e) {}

  generateArray(obj) {
     return Object.keys(obj).map((key) => {
       return obj[key];
     });
  }

}