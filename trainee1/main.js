Vue.component('app-firstname',{
    data : function (){
        return {
            people: peopleFromJson
        }
    },
    template: '<div><div class = "firstname" v-for="firstname in people"><p>{{ firstname.first_name}}</p></div></div>'
});

// Vue.component('person-list',{
//
// })
//
// Vue.component ('person', {
//     data:
// })


new Vue({
    el: '#app',
    data:{

    }
});

