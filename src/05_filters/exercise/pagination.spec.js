describe('pagination filter', function () {

  var paginationFilter;

  beforeEach(module('pagination'));
  beforeEach(inject(function (_paginationFilter_) {
    paginationFilter = _paginationFilter_;
  }));



  it('should return empty output for empty input', function(){
    //when
    var result = paginationFilter([],1,10);
    //then
    expect(result).toEqual([]);
  });

  it('should limit number of items to given', function(){
    //when
    var result = paginationFilter(['a','b','c'],0,2);
    //then
    expect(result).toEqual(['a','b']);
  });


});