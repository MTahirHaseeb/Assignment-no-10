import Image from "next/image"
const Section2 = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-6">
                        <Image

                            src="/../public/Group (1).png"
                            alt="Picture of the author"
                            width={428.28}
                            height={351.88}
                        />
                    </div>
                    <div className="col-md-6">
                        <h1  className="bg-dark text-light">20 years of relationships + experience</h1>
                        <p>The idea of building a B2B marketplace, came to us a few years ago. Experiencing the process of buying and selling in bulk: footwear, apparel etc... since early 2002 we’ve encountered issues and restrictions , we also faced lots of question from sellers and buyers, shipping issues etc... But at the end of this journey, we are now providing answers and solutions that will help our network and partners!</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Section2;