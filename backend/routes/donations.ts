import express from 'express';
import Donation from '../models/Donation.ts';
import authMiddleware from '../middleware/authMiddleware.ts';

const router = express.Router();

// Create a new donation (venue only)
router.post('/', authMiddleware, async (req: any, res) => {
    try {
        if (req.user.role !== 'venue') {
            return res.status(403).json({ message: 'Only venues can create donations' });
        }
        const { foodType, quantity, description, pickupWindowStart, pickupWindowEnd } = req.body;
        const donation = new Donation({
            venueId: req.user.userId,
            foodType,
            quantity,
            description,
            status: 'available',
            pickupWindowStart,
            pickupWindowEnd
        });
        await donation.save();
        res.status(201).json(donation);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// List all donations
router.get('/', authMiddleware, async (req, res) => {
    try {
        const donations = await Donation.find().populate('venueId', 'name email');
        res.json(donations);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update donation status (claimed, pickedup, delivered)
router.patch('/:id/status', authMiddleware, async (req: any, res) => {
    try {
        const { status } = req.body;
        const donation = await Donation.findById(req.params.id);
        if (!donation) {
            return res.status(404).json({ message: 'Donation not found' });
        }
        // Only allow status update by NGO or Volunteer
        if (req.user.role === 'ngo' || req.user.role === 'volunteer') {
            donation.status = status;
            await donation.save();
            return res.json(donation);
        } else {
            return res.status(403).json({ message: 'Not authorized to update status' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
