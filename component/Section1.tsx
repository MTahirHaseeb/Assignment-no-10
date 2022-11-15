import Image from "next/image"
const Section1 = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="bg-dark text-light">Why HypeIndustry and what is it exactly?</h1>
                        <p>Hypeindustry
                            Hype Offers
                            Shipping
                            Seller Request Form
                            Login
                            Brand, models…
                            hype
                            ndustry
                            bulkwholesale
                            Why HypeIndustry and what is it exactly?
                            Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel & Accessory industry! Basically a new marketplace that allows you to buy in bulk (only) footwear, apparel etc... Buy cheaper because of the bulk volume discount and resell worldwide to make a small margin and keep the volume and recurrence active! The key to make your money fast.
                            4/4</p>
                    </div>
                    <div className="col-md-6">
                        <Image

                            src="/../public/icons.png"
                            alt="Picture of the author"
                            width={428.28}
                            height={351.88}
                        />
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Section1;