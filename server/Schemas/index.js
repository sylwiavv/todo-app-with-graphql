const graphql = require('graphql');
const userData = require("../MOCK_DATA.json");
const UserType = require('./TypeDefinations/UserType');
const generatedId = require('../helpers/helpers');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLString,
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt }},
            resolve(parent, args) {
                return userData;
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
            createUser: {
                type: UserType,
                args: {
                    firstName: { type: GraphQLString },
                    lastName: { type: GraphQLString },
                    email: { type: GraphQLString },
                    password: { type: GraphQLString },
                },
                resolve(parent, args) {
                    userData.push( {
                        id: userData.length + generatedId,
                        firstName: args.firstName,
                        lastName: args.lastName,
                        email: args.email,
                        password: args.password,
                    } )
                    return args;
                }
            },

        deleteUser: {
            type: UserType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args) {
                const id = args.id;
                const indexOfObject = userData.findIndex(object => {
                    return object.id === id;
                });
                userData.splice(indexOfObject, 1);
                return args;
            }
        },

        updateUser: {
            type: UserType,
            args: {
                id: {type: GraphQLInt},
                firstName: { type: GraphQLString }
            },
            resolve(parent, args) {
                const id = args.id;
                const indexOfObject = userData.findIndex(object => {
                    return object.id === id;
                });

                if (id !== -1) {
                    userData[indexOfObject].firstName = args.firstName
                }
                return args;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
