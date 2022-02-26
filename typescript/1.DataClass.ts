class MyRequest {
	response: string;
	fulfilled: boolean;
	constructor(public method: string, public uri: string, public version: string, public message: string) {
		this.response = undefined;
		this.fulfilled = false;
	}
}

let myData = new MyRequest("GET", "http://google.com", "HTTP/1.1", "");
myData.fulfilled = true;
console.log(myData);
