import Album from '../models/profileModels/albumModel/album';

export const createAlbum = async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addPhotoToAlbum = async (req, res) => {
  try {
    const { albumId, photoUrl } = req.body;
    const album = await Album.findById(albumId);
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    album.photos.push(photoUrl);
    await album.save();
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAlbumPrivacy = async (req, res) => {
  try {
    const { albumId, isPublic } = req.body;
    const album = await Album.findByIdAndUpdate(albumId, { isPublic }, { new: true });
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    const { albumId } = req.params;
    const album = await Album.findByIdAndDelete(albumId);
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.status(200).json({ message: 'Album deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
