export class User {
    _id: String;
    stripeCustomerId: String;
    roles: any[] = null;
    name: String;
    email: String;
    phone: String;
    address: String;
    city: String;
    state: String;
    zip: String;
    activated: Boolean;
    photo: String;
}
