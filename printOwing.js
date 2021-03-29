function printOwing(self){
    self.printBanner()
    self.printDetails(self.getOutstanding())
}

function printPrint(self, outstanding){
    alert("name:", self.name)
    alert("amount:", outstanding)
}
