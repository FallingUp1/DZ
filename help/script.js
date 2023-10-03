import { ref } from 'vue'
export default {
  setup() {
    
  },
  data(){
    return{
        selected:'',  
        checked1:false,
        checked2:false,
        checked3:false,
        checked4:false,
        checked5:false,
        checked6:false,
        checked7:false,
        selected2:'',
        Result :0
     }
  },
  methods:{
  Count:function(){
    this.Result += parseFloat(this.selected)
    this.Result+= parseInt(this.selected2)
    if(this.checked1 == true){
       this.Result += 50
    }
    if(this.checked2 == true){
        this.Result += 30
     }
     if(this.checked3 == true){
        this.Result += 20
     }
     if(this.checked5 == true){
        this.Result += 50
     }
     if(this.checked6 == true){
        this.Result += 30
     }
     if(this.checked1 == true){
        this.Result += 20
     }
  }

  },
  template: `
  <div>

  <p>Шаурма с курицей:</p>
  <select v-model = "selected"> 
  <option value = "180">Стандарт</option>
  <option value = "200">Мега</option>
  <option value = 275">Мега+</option>
  <option value = "190">Цезарь стандарт</option>
  <option value = "215">Цезарь мега</option>
  <option value = "200">Сырная</option>
  <option value = "260">Три сыра</option>
  </select>


  <p>Дополнительные добавки:</p>
  <input type="checkbox"  v-model ="checked1" >Мясо</input>
  <input type="checkbox"  v-model ="checked2">Сыр</input>
  <input type="checkbox"  v-model ="checked3">Холопеньо</input>
	


  <div>
  <p>Острый соус:</p>
  <input name="radio" type="radio" v-model="selected2" value="10">Да</input>
  <input type="radio" name="radio">Нет</input>
  </div>

  <div>
  <p>Напиток:</p>
  <input type="checkbox" name="checkbox"  v-model="checked4">Да</input>
  <p v-if ="checked4 == true">
  <div>
  <input type="checkbox" v-model="checked5" >Морс</input>
  <input type="checkbox" v-model="checked6" >Газировка</input>
  <input type="checkbox" v-model="checked7" >Сок</input>
  </div>
  </p>
  

  <p><button @click = "Count()">Подсчет</button></p>
  <p>Итог:</p>
  <p>{{Result}}</p>





  </div>
  
  `
}

