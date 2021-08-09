export const ApiRoutes =
{
    LoginRoute:"https://authorizationapifinal.azurewebsites.net/api/Auth/Login",
    //"https://localhost:44365/api/Auth/Login",
    CreateCustomerBusiness:"https://microserviceapiconsumer.azurewebsites.net/api/Consumer/CreateConsumerBusiness",
    // "https://localhost:44312/api/Consumer/CreateConsumerBusiness",
    UpdateCustomerBusiness:"https://microserviceapiconsumer.azurewebsites.net/api/Consumer/UpdateConsumerBusiness",
    //"http://localhost:44312/api/Consumer/updateConsumerBusiness",
    CreateBusinessProperty:"https://microserviceapiconsumer.azurewebsites.net/api/Consumer/CreateBusinessProperty",
    //"http://localhost:44312/api/Consumer/createBusinessProperty",
    UpdateBusinessProperty:"https://microserviceapiconsumer.azurewebsites.net/api/Consumer/UpdateBusinessProperty",
    //"http://localhost:44312/api/Consumer/updateBusinessProperty",
    GetCustomerBusiness: "https://consumerapimicroservicefinal.azurewebsites.net/api/Consumer/viewConsumerBusiness",
    GetBusinessProperty: "https://consumerapimicroservicefinal.azurewebsites.net/api/Consumer/viewConsumerProperty",

    GetPolicyMaster: "",
    GetQuotes: "https://policymicroserviceapi.azurewebsites.net/api/Policy/getQuotes",
    //"http://localhost:61197/api/Policy/GetQuotes?businessValue=5&propertyValue=6",
    CreatePolicy: "https://policymicroserviceapi.azurewebsites.net/api/Policy/createPolicy",
    //http://localhost:61197/api/Policy/CreatePolicy",
    IssuePolicy:"https://policymicroserviceapi.azurewebsites.net/api/Policy/issuePolicy",
    //"http://localhost:61197/api/Policy/IssuePolicy",
    GetPolicy:"https://policymicroserviceapi.azurewebsites.net/api/Policy/viewPolicy",
    //"http://localhost:61197/api/Policy/GetPolicy?PolicyId=1&ConsumerId=1"
}
