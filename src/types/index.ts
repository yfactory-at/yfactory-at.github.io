interface ContactInfo {
    owner: string;
    uid: string;
    phone: string;
    email: string;
    directors: string[];
    address: string;
    companyNumber: string;
    court: string;
}

const contactInfo: ContactInfo = {
    owner: "yfactory GmbH",
    uid: "ATU80270234",
    phone: "+43 664 915 11 02",
    email: "info@yfactory.at",
    directors: ["Daniel Laiminger", "Karl Edlbauer", "Simon Tretter"],
    address: "Sonnenstraße 25b/6, 4852 Weyregg am Attersee",
    companyNumber: "FN 620506 i",
    court: "Landesgericht Wels"
};

export { ContactInfo, contactInfo };