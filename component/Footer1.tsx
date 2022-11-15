import styles from "../styles/component/Footer1.module.css"
const Footer1 = () => {
    return (
        <div>
            <div className="container bg-dark text-light mt-5 p-5 pb-5">
                <div className="row">
                    <div className="col-md-2">
                        <h3>HypeIndustry</h3>
                        

                        

                        <ul>
                            <li>HypeIndustry Concept</li>
                            <li>Buying Guide</li>
                            <li>Selling Guide</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h3>Hype Offers</h3>
                        <ul >
                            <li >Footwear</li>
                            <li>Apparel</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h3>Shipping</h3>
                        <ul><li>Shipping for buyers</li></ul>
                        <li>Shipping for sellers</li>
                    </div>
                    <div className="col-md-6 ">
                        <h3 className="text-center">Contact Us</h3>
                        <ul className="text-center">
                            <li>shipping@hypeindustry.com</li>
                            <li>sales@hypindustry.com</li>
                        </ul>
                       
                    </div>
                </div>
                <h6 className="text-center mt-5" >© 2022 HypeIndustry</h6>
            </div>
        </div>
    );
}

export default Footer1;