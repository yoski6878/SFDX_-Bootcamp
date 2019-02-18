public with sharing class BMIController {

    public BMIController() { }

    @AuraEnabled
    public static List<BMI__c> getBMI() {
        return [Select Name, Height__c, Weight__c, BMI__c from BMI__c Order by CreatedDate desc Limit 5];
    }

    @AuraEnabled
    public static void saveBMI(Double height, Double weight, Double bmi) {
        insert new BMI__c(
            Height__c = height,
            Weight__c = weight,
            BMI__c = bmi
        );
    }
}
