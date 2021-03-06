import {Model, Server} from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    return new Server({
        environment,

        models: {
            plan: Model,
            payment: Model
        },

        seeds(server) {
            server.create('plan', {
                name: "Beginner",
                amount: 5,
                pecks: ['Basic Options', '1TB Storage', 'Opportunity to share']
            });
            server.create('plan', {
                name: "Pro",
                amount: 25,
                pecks: ['General Options', '2TB Storage', 'Opportunity to share and invite users']
            });
            server.create('plan', {
                name: "Super Pro",
                amount: 85,
                pecks: ['All Possible Options', 'Unlimited Storage Capacity', 'Sharing, inviting and managing']
            });

            server.create('payment', {
                code: 0,
                status: 'success',
                reason: 'payment successful'
            })
        },

        routes() {
            this.namespace = "api"

            this.get('/plans', (schema) => {
                return schema.plans.all();
            });

            this.post('/subscribe', () => {
                return {
                    code: 0,
                    status: 'success',
                    reason: 'payment successful'
                }
            });
        },
    })
}