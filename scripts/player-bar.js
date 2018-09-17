{
  $('button#play-pause').on('click', function() {
     player.playPause();
     $(this).attr('playState', player.playState);
   });

   $('button#previous').click(function() {
     if (player.playState !== 'playing') { return false }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const previousSongIndex = currentSongIndex - 1;
     if (currentSongIndex < 1) { return; }

     const newSong = album.songs[prevSongIndex];
     player.playPause(newSong);
     $('#time-control .total-time').text(player.prettyTime(newSong.duration) );
   });

   $('button#next').click(function() {
     if (player.playState !== 'playing') { return false }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex + 1;
     if (nextSongIndex >= album.songs.length) { return; }

     const nextSong = album.songs[nextSongIndex];
     player.playPause(nextSong);
     $('#time-control.total-time').text( player.prettyTime(newSong.duration)
   });


}
