export default function config($stateProvider) {
  $stateProvider.state('bookmark', {
    url: '/bookmark/:id',
    component: 'bookmark',
    resolve: {
      bookmark: function($stateParams, BookmarkService) {
        return BookmarkService.findBookmark(+$stateParams.id);
      }
    }
  })
}
