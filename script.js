Vue.createApp({
    setup(){

    },
    data() {
      return {
          apikey:"https://api.github.com/users/",
          datas:"",
          repos:"",
      }
    },
    computed: {
    },
    methods: {
        async search(event){
            try{
                let {data} = await axios(this.apikey + event.target.value)
                this.datas = data;
                this.getUser(event.target.value);
                console.log(this.datas)
            }
            catch(error){   
                    console.log(error);
            }
        },
        async getUser(username){
            try{
                let {data} = await axios(this.apikey  + username + '/repos?sort=created')
                this.repos = data
            }
            catch(error){   
                    console.log(error);
            }
        }
    }
  }).mount('#app')