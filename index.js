const PlayList = {
    data() {
        return {
            playlist: ["淘汰", "明明就", "晴天"],
            searchTerm: ''
        };
    },
    computed: {
        filterPlayList() {
            if (this.searchTerm) {
                return this.playlist.filter((song) =>
                    song.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            } else {
                return this.playlist
            }
        }
    }
};

Vue.createApp(PlayList).mount("#app");