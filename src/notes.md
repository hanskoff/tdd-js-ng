Notes
=======

# Scopes
 * graph-like structure
    (e.g. direct call to parent: $scope.$parent.user)
 * prototypical inheritance (reads from hierarchy in parent-last fashion /writes locally)
 * initialized by controllers
 * unused scopes can be garbage collected
 * using scopes avoids name collisions

# Controllers
 * tested by interactions with $scope

# Modules
 * grouping DI components

# Promise API


# Useful materials
 * http://blogs.msdn.com/b/ericlippert/archive/2003/09/17/53038.aspx
 * http://martinfowler.com/articles/mocksArentStubs.html
 * https://gist.github.com/domenic/3889970 => http://domenic.me/2012/10/14/youre-missing-the-point-of-promises/
 * http://docs.scala-lang.org/overviews/core/futures.html