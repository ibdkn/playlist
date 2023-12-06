// Data
let playlist1 = {
    title: "Rock Hits",
    coverImageUrl: "./img/playlist1.png",
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: "./img/track1.jpg",
            artistName: "Guns N' Roses",
            title: "Don't Cry",
            fileUrl: "./tracks/Guns_N'_Roses_Don't_Cry.mp3",
            isHot: true,
        },
        {
            coverImageUrl: "./img/track2.jpg",
            artistName: "Guns N' Roses",
            title: "This I Love",
            fileUrl: "./tracks/Guns_N'_Roses_This_I_Love.mp3",
            isHot: true,
        },
        {
            coverImageUrl: "./img/track3.jpg",
            artistName: "Metallica",
            title: "Master Of Puppets",
            fileUrl: "./tracks/Metallica_Master_Of_Puppets.mp3",
            isHot: true,
        },
        {
            coverImageUrl: "./img/track4.jpg",
            artistName: "Iron Maiden",
            title: "Wasted Ears",
            fileUrl: "./tracks/Iron_Maiden_Wasted _ears.mp3",
            isHot: true,
        },
    ]
}
let playlist2 = {
    title: "Rap Hits",
    coverImageUrl: "./img/playlist1.png",
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: "./img/track1.jpg",
            artistName: "Guns N' Roses",
            title: "Don't Cry",
            fileUrl: "./tracks/Guns_N'_Roses_Don't_Cry.mp3",
            isHot: true,
        },
        {
            coverImageUrl: "./img/track2.jpg",
            artistName: "Guns N' Roses",
            title: "This I Love",
            fileUrl: "./tracks/Guns_N'_Roses_This_I_Love.mp3",
            isHot: true,
        },
        {
            coverImageUrl: "./img/track3.jpg",
            artistName: "Metallica",
            title: "Master Of Puppets",
            fileUrl: "./tracks/Metallica_Master_Of_Puppets.mp3",
            isHot: true,
        },
        {
            coverImageUrl: "./img/track4.jpg",
            artistName: "Iron Maiden",
            title: "Wasted Ears",
            fileUrl: "./tracks/Iron_Maiden_Wasted _ears.mp3",
            isHot: true,
        },
    ]
}

// variables
let playlistsMainElement = document.getElementById('playlists');

// render
renderPlaylist(playlist1);
renderPlaylist(playlist2);

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
}

function renderPlaylistHeader(playlistForRendering) {
    let playlistElement = document.createElement('div');
    playlistElement.classList.add('playlist');

    let playlistHeaderElement = document.createElement('div');
    playlistHeaderElement.classList.add('playlist__header');

    let playlistCoverElement = document.createElement('div');
    playlistCoverElement.classList.add('playlist__cover');

    let playlistCoverImageElement = document.createElement('img');
    playlistCoverImageElement.src = playlistForRendering.coverImageUrl;
    playlistCoverImageElement.alt = 'Cover image';

    let playlistInfoElement = document.createElement('div');
    playlistInfoElement.classList.add('playlist__info');

    let playlistNameElement = document.createElement('p');
    playlistNameElement.classList.add('playlist__name');
    playlistNameElement.innerText = 'Playlist';

    let playlistCategoryElement = document.createElement('p');
    playlistCategoryElement.classList.add('playlist__category');
    playlistCategoryElement.innerText = playlistForRendering.title;

    let playlistAboutElement = document.createElement('p');
    playlistAboutElement.classList.add('playlist__about');
    playlistAboutElement.innerText = playlistForRendering.info.totalTracksCount + ' tracks, ' + playlistForRendering.info.totalTracksDurationInSeconds + 's';

    let playlistArtistsElement = document.createElement('p');
    playlistArtistsElement.classList.add('playlist__artists');

    playlistArtistsElement.innerHTML = playlistForRendering.tracks[0].artistName + ', ' + playlistForRendering.tracks[2].artistName + ', ' + playlistForRendering.tracks[3].artistName + '<span> and others</span>';

    playlistInfoElement.append(playlistNameElement);
    playlistInfoElement.append(playlistCategoryElement);
    playlistInfoElement.append(playlistAboutElement);
    playlistInfoElement.append(playlistArtistsElement);

    playlistCoverElement.append(playlistCoverImageElement);
    playlistHeaderElement.append(playlistCoverElement);
    playlistHeaderElement.append(playlistInfoElement);

    playlistElement.append(playlistHeaderElement);
    playlistsMainElement.append(playlistElement);

    renderTrack(playlistForRendering.tracks, playlistElement);
}

function renderTrack(inputTrackForRendering, element) {
    let tracksElement = document.createElement('div');
    tracksElement.classList.add('tracks');

    let tracksListElement = document.createElement('ul');
    tracksListElement.classList.add('tracks__list');

    let playlistElement = document.createElement('div');
    playlistElement.classList.add('playlist');

    inputTrackForRendering.forEach(items => {
        let { coverImageUrl, artistName, title, fileUrl, isHot } = items;

        let trackElement = document.createElement('li');
        trackElement.classList.add('track');

        let trackImageElement = document.createElement('img');
        trackImageElement.classList.add('track__cover');
        trackImageElement.src = coverImageUrl;

        let trackWrapElement = document.createElement('div');
        trackWrapElement.classList.add('track__wrap');

        let trackArtistElement = document.createElement('span');
        trackArtistElement.classList.add('track__artist');
        trackArtistElement.innerText = artistName + ' - ';

        if(isHot) {
            let trackImageFireElement = document.createElement('img');
            trackImageFireElement.classList.add('top-fire');
            trackImageFireElement.src = 'img/fire.svg';

            trackArtistElement.prepend(trackImageFireElement);
        }

        let trackTitleElement = document.createElement('span');
        trackTitleElement.classList.add('track__title');
        trackTitleElement.innerText = title;

        let trackAudioElement = document.createElement('audio');
        trackAudioElement.classList.add('track__audio');
        trackAudioElement.setAttribute('controls', '');
        trackAudioElement.src = fileUrl;

        trackWrapElement.append(trackArtistElement);
        trackWrapElement.append(trackTitleElement);
        trackWrapElement.append(trackAudioElement);

        trackElement.append(trackImageElement);
        trackElement.append(trackWrapElement);

        tracksListElement.append(trackElement);
        tracksElement.append(tracksListElement);

        element.append(tracksElement);
    });
}