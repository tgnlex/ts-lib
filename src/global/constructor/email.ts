

class Email = {
  sender: string = "";
  recipient: string = "";
  subject: string = "";
  body: string = "";
  attachments?: any = false,
  provider?: string = "gmail",
  constructor(
    sender: string, 
    recipient: string, 
    subject: string, 
    body: string,
    attachments?: any,
  ) {
    this.sender = sender;
    this.recipient = recipient;
    this.subject = subject;
    this.body = body;
    if (attachments) {
      this.attachments = attachments;
    }
  }
}

export default Email;
