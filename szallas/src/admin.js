const admin = {
    _value: false,
  
    get value() {
      return this._value;
    },
    set value(newValue) {
      this._value = newValue;
    }
  };
  
  export { admin };
  