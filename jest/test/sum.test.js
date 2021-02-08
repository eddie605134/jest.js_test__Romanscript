import {sum, subtract, bankAccount} from '../sum'

test('adds 1  + 2 to equal 3', () => { // 第一個參數是標題
  expect(sum(1, 2)).toBe(3);
});

// .not.toBe() 
test('test no tobe', () => { 
  expect(subtract(2, 3)).not.toBe(0);
});

// .toBeNull() 
test('number no BeNull', () => { 
  const number = 1;
  expect(number).not.toBeNull();
});

//toBeLessThan
test('should get sum less than 50', () => { 
  expect(sum(20, 29)).toBeLessThan(50);
});

//toBeLessThanOrEqual
test('should get sum less than or equal 50', () => { 
  expect(sum(20, 30)).toBeLessThanOrEqual(50);
});

//toBeTruthy
test('username should be admin', () => { 
  const userName = "admin"
  expect(userName === "admin").toBeTruthy();
});

//toBeFalsy
test('username shouldn"t be admin', () => { 
  const userName = "admins"
  expect(userName === "admin").toBeFalsy();
});

//toEqual 比較object
test('Balance equals 500', () => { 
  expect(bankAccount.getBalance()).toEqual({ balance: 500 });
});

//toContain 
test('name in userName', () => { 
  const userName = ['John', 'eddie', 'Smith']
  expect(userName).toContain('John');
});



