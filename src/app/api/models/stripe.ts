interface IStripeRequests {
    Buy(): Promise<{ clientSecret: string }>
}
export type { IStripeRequests }