/*eslint-disable*/
import React, { Component } from 'react';
import SalesDistributorViewIndividualComponent from './SalesDistributorViewIndividualComponent';

class SalesDistributorViewComponent extends Component {
  render(props) {
    let { sales, handleExpandOrder, expansionOrderState } = this.props;
    return (
      <div className="salesDistributorViewComponent">
        <div className="salesDistributorViewComponent--wrapper">
            <h2>Sales list</h2>
            <div className="list__sales">
                {
                    sales.map((order) => {
                        return <SalesDistributorViewIndividualComponent
                                order={order}
                                expansionOrderState={expansionOrderState}
                                handleExpandOrder={handleExpandOrder}
                                key={order.sale_id}
                               />
                    })
                }
            </div>
            {/* SalesDistributorViewComponent */}
        </div>
      </div>
    )
  }
}

export default SalesDistributorViewComponent;