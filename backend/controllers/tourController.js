import Tour from "../models/Tour.js";

// create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again",
        });
    }
};

// update tour
export const updateTour = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedTour = await Tour.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update",
        });
    }
};

// delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;

    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete",
        });
    }
};

// get single tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;

    try {
        const tour = await Tour.findById(id);
        res.status(200).json({
            success: true,
            message: "Successfully",
            data: tour,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not found",
        });
    }
};

// get all tour
export const getAllTour = async (req, res) => {
    try {
    } catch (err) {}
};
