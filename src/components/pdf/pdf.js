import React, { PureComponent } from 'react';
import jsPDF from 'jspdf'
import Temp from './external_temp'



class CartItem extends PureComponent{
    constructor(props) {
        super(props);

        this.state={
            
        }
    }   
    
    
    jsPdfGenerator = () => {
        let doc = new jsPDF('p','pt');

        // add some text to pdf
        doc.text(20,20," The sample document")

        //save the document
        doc.save("internal.pdf")
     

    }

    render() {
        return (

            <div>
              <button onClick ={this.jsPdfGenerator}>Generate pdf</button>
            </div>
            
         
                
        )
    }
}

export default CartItem;