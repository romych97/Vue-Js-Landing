// Определяем новый компонент под именем todo-item

$("#modal_edit_inner").load("components/modal_edit.html"); 
$("#modal_delete_inner").load("components/modal_delete.html"); 
$("#modal_transfer_inner").load("components/transfer.html"); 

window.onload = function() {
  ready();
}

function ready() {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Привет, Vue!',
      name: 'Елена',
      family: 'Власова',
      transfer_counter: 1,
      money_count: 0,
      showModal_redact: false,
      showModal_delete: false,
      showModal_transfer: false,
      menu_list: [
        { 
          id: 0, 
          text: 'Главная страница', 
          href: "", 
          click: "" 
        }, 
        { 
          id: 1, 
          text: 'Платежи и переводы', 
          href: "", 
          click: "showModal_transfer = true" 
        }
      ], 
    }, methods: {
      changeName: function(event) {
            this.name = event.target.value
      },
      changeWalletToTransfer: function(event) {
        if (event.target.value.length >= 13) {
          event.target.value = event.target.value.substring(0, event.target.value.length-1);
        }
      },
      counter: function(event) {
        console.log('event')
        this.money_count = event.target.value
        console.log(event)
      },
      delete_user: function() {
      },
      redact_user: function() {
      },
    }
  })
}
