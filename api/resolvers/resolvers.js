//imports

//code

const resolvers = {
    Query : {
        login: async (_, {user}, __) => {
           
            return "this is a super token"
        },

        sigin: async(_,{user}, __) => {
            res = {
                "name" : "martin", 
                "apellido" : "sanchez", 
                "username" : "msanchez"
            }
            return res
        },

        get_user: async(_,{token}, __) => {
            res = {
                "name" : "martin", 
                "apellido" : "sanchez", 
                "username" : "msanchez"
            }
            return res
        }
    }
}

export default resolvers