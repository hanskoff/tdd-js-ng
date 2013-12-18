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

  it('should respect page number', function(){
    //when
    var result = paginationFilter(['a','b','c'],1,2);
    //then
    expect(result).toEqual(['c']);
  });

  it('should respect page number', function(){
    //when
    var result = paginationFilter(['a','b','c'],3,2);
    //then
    expect(result).toEqual([]);
  });

  it('should return tailing pages', function(){
    //when
    var result = paginationFilter(['a','b','c'], -1, 2);
    //then
    expect(result).toEqual(['a', 'b']);
  });


});