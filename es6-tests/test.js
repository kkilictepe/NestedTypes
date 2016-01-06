import { define, Model, Store } from 'nestedtypes'

@define({
    attributes : {
        name : String
    }
})
class Location extends Model {}

@define
class User extends Model {}

@define
class Role extends Model {}

User.define({
    attributes : {
        name : String,
        roles : Role.Collection.subsetOf( '~roles' )
    }
});

Role.define({
    attributes : {
        name : String,
        users : Role.Collection.subsetOf( '~users' )
    }
});

@define( {
    attributes : {
        roles : Role.Collection,
        users : User.Collection
    },

    url: '/api/config'
})
class ConfigStore extends Store {}

@define({
    state : {
        count : Number
    },

    props : {
        a : Number
    },

    mixins : [ A, B ],

    autobind : 'name1 name2 name3'
})
class MyComponent extends Component{
    render(){

    }
}

