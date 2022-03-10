/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  const result = new ListNode();
  let current = result;
  
  let carry = false;
  
  while (l1 !== null && l2 !== null) {
      let sum = l1.val + l2.val;
      if (carry) sum += 1;
      
      if (sum >= 10) {
          current.next = new ListNode(sum - 10);
          current = current.next;
          carry = true;
      } else {
          current.next = new ListNode(sum)
          current = current.next;
          carry = false;
      }
      
      l1 = l1.next;
      l2 = l2.next;
  }
  
  if (l1 !== null) {
      current.next = l1;
      while (carry) {
          const sum = l1.val + 1;

          if (sum === 10) {
              l1.val = 0;
              
              if (l1.next === null) {
                  carry = false;
                  l1.next = new ListNode(1);
                  break;
              }
          }
          else {
              l1.val += 1;
              carry = false;
          }

          l1 = l1.next;
      }
  }
  
  if (l2 !== null) {
      current.next = l2;
      while (carry) {            
          const sum = l2.val + 1;

          if (sum === 10) {
              l2.val = 0;
              
              if (l2.next === null) {
                  carry = false;
                  l2.next = new ListNode(1);
                  break;
              }
          }
          else {
              l2.val += 1;
              carry = false;
          }

          l2 = l2.next;
      }
  }
  
  if (carry) {
      current.next = new ListNode(1);
  }
  
  return result.next;
};