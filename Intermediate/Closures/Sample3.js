var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();

  console.log(counter.value()); // logs 0
  counter.increment();
  counter.increment();
  console.log(counter.value()); // logs 2
  counter.decrement();
  console.log(counter.value()); // logs 1
  console.log();
  
  const counterOther = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();

  console.log(counterOther.value()); // logs 0
  counterOther.increment();
  counterOther.increment();
  console.log(counterOther.value()); // logs 2
  counterOther.decrement();
  console.log(counterOther.value()); // logs 1
  console.log();

  const counterOtherOther = (() => {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();

  console.log(counterOtherOther.value()); // logs 0
  counterOtherOther.increment();
  counterOtherOther.increment();
  console.log(counterOtherOther.value()); // logs 2
  counterOtherOther.decrement();
  console.log(counterOtherOther.value()); // logs 1