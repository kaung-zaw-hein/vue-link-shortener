
Vue.createApp({
    data() {
      return {
          error:false,
          link:"",
          apiKey: "9a01aa8495b78f86dfa2d3eab9138d80b36dd6f9",
      }
    },
    methods: {
        async linkshort(event){
            try{
                await fetch('https://api-ssl.bitly.com/v4/shorten', {
                method: 'POST',
                headers: {
                    'Authorization': "8cf9c46fd334fe246e876380fa62928f87525292",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'long_url': event.target.value,
                })
            })
            .then(resp => resp.json())
            .then( (data) => {
                console.log(data);
                this.link = "";
                event.target.value = "";
                this.link = data;
            })
            
            
            }
            catch(error){   
                    console.log(error);
                    this.error = true;
                    setTimeout(() =>{
                        this.error = false;
                    }, 1200);
            }
        },
        async copy() {
            const el = document.createElement('textarea')
           try{
            el.setAttribute('readonly', '')
            el.style.position = 'absolute'
            el.style.left = '-9999px'
            el.value = this.link.link

            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            alert(el.value + "Copy successfull")
            document.body.removeChild(el)
           }
           catch(error){
             alert("cant copy this url")
           }
        }
    }
  }).mount('#app')