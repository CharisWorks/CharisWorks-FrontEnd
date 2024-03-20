import { IAuthRequests } from "./models/request";
import { IStripeRequests } from "./models/stripe";
class StripeRequests implements IStripeRequests {
    private AuthRequests: IAuthRequests
    constructor(AuthRequests: IAuthRequests) {
        this.AuthRequests = AuthRequests
    }
    async Buy(): Promise<{ clientSecret: string; }> {
        const response: Response = await this.AuthRequests.Get('/api/buy')
        const data: { clientSecret: string } = await response.json()
        console.log("secret: ", data)
        return data
    }
}
export { StripeRequests }
