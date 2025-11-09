import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import authRoute from './routes/authRouter.js';
import userRouter from "./routes/userRouter.js";
import organizationRoutes from './routes/organizationRoutes.js';
import investigationRoutes from "./routes/investigationRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import incidentReportRoutes from './routes/incidentReportRoutes.js';
import incidentRoutes from './routes/incidentRoutes.js';
import incidentAlertRouter from "./routes/incidentAlertsRoutes.js";
import branchRouter from "./routes/branchRoutes.js";
import agencyRoutes from "./routes/agencyRoutes.js";

const app = express();
app.use(express.json());
connectDB();
const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (Postman, server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));



app.use('/api/auth', authRoute);
app.use('/api/user', userRouter);
app.use('/api/organizations', organizationRoutes);
app.use("/api/investigations", investigationRoutes);
app.use("/api/roles", roleRoutes);
app.use('/api/reports', incidentReportRoutes);
app.use('/api/incident', incidentRoutes);
app.use('/api/agency', agencyRoutes);
app.use('/api/branch', branchRouter);
app.use('/api/incident-alerts', incidentAlertRouter);
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); /
app.get('/', (req, res) => {
  res.status(200).json({ success: true });
});

export default app;
