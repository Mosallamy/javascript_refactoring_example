function printOwing(self):
    self.printBanner()

    # print details
    alert("name:", self.name)
    alert("amount:", self.getOutstanding())
