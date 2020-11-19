document.querySelectorAll('input').forEach(function(item){
    if(item.dataset.purpose == "progress-toggle-button"){    
        item.click();
    }
})
