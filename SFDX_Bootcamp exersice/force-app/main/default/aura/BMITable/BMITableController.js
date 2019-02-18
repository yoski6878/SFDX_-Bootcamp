({
    doInit : function(component, event, helper) {
        helper.getBMI(component, event, helper);
    },
    handleRecordSaved : function(component, event, helper) {
        if("BMIForm:recordSaved" == event.getParam('type')) {
            helper.getBMI(component, event, helper);
        }
    }
})