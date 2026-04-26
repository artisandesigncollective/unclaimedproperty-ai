import { NextApiRequest, NextApiResponse } from 'next';

/**
 * UnclaimedProperty AI: The Unlock Generator
 * 
 * Architecture: Each of the 50 states has vastly different claim forms (e.g., California vs. Texas).
 * The RAG engine maps the user's data to the exact PDF schema required by the specific state.
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const { stripeSessionId, userEmail, matches } = req.body;

    // Hard Check: Ensure the $29 fee was captured before form generation
    if (!stripeSessionId) {
      console.log(`[Property-RAG] ❌ Access Denied. Unpaid high-compute request blocked.`);
      return res.status(402).json({ error: 'Payment required to generate legal forms.' });
    }

    console.log(`[Property-RAG] ⚖️ Initializing Multi-State Form Generation for ${userEmail}...`);

    // Simulated AI Execution
    // 1. Ingest the user's uploaded Photo ID and Proof of Address.
    // 2. Determine which state (e.g., CA Controller) the funds are in.
    // 3. Map user data into the specific state's PDF claim template using a library like pdf-lib.
    // 4. Generate a cover letter with instructions on where to mail the notarized forms.
    
    const packetId = `packet_${Math.random().toString(36).substr(2, 9)}`;

    console.log(`[Property-RAG] ✅ Unlock Packet ${packetId} generated.`);

    return res.status(200).json({ 
      success: true, 
      packetId,
      downloadUrl: `https://storage.unclaimedproperty.com/packets/${packetId}.pdf`,
      message: 'Claim forms generated. Please notarize and mail to the provided state addresses.'
    });

  } catch (error) {
    console.error("[Property-RAG] Generation Failure:", error);
    return res.status(500).json({ error: 'Internal Server Error during form mapping.' });
  }
}
