function getRating(objecetTest):
  if objecetTest.moreThanFiveLateDeliveries(){
    return 5
  }else{
    return 1
  }
  
function moreThanFiveLateDeliveries(objecetTest):
  return objecetTest.numberOfLateDeliveries > 5
