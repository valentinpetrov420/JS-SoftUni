interface IRequest{
    method: string;
    uri: string;
    version: string;
    message: string;
}
class Requester implements IRequest{
    public response: string;
    public fulfilled: boolean;

    constructor(
        public method: string,
        public uri: string,
        public version: string,
        public message: string
    ) {
        this.response = undefined;
        this.fulfilled = false;
    }
}

export default Requester;