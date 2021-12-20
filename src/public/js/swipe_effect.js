mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light',
    lang: 'es'
};

var lv,
    formatDate = mobiscroll.util.datetime.formatDate;

lv = mobiscroll.listview('#demo', {
    theme: 'ios',           // Specify theme like: theme: 'ios' or omit setting to use default
    themeVariant: 'light',  // More info about themeVariant: https://docs.mobiscroll.com/4-10-9/javascript/listview#opt-themeVariant
    lang: 'es',             // Specify language like: lang: 'pl' or omit setting to use default
    stages: [{              // More info about stages: https://docs.mobiscroll.com/4-10-9/javascript/listview#opt-stages
        percent: -25,
        color: '#F95151',
        icon: 'remove',
        text: 'Delete',
        confirm: true,
        action: function (event, inst) {
            inst.remove(event.target);
            window.location = event.target.querySelector("#edit_href").getAttribute("href").replace("update", "delete");
            return false;
        }
    }, {
        percent: 25,
        color: '#5350F7',
        icon: 'pencil',
        text: 'Edit',
        action: function (event, inst) {
            window.location = event.target.querySelector("#edit_href").getAttribute("href"); // Get href from the element   
        }
    }]
});
