import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const allowedTypes = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);

export function assertUploadAllowed(fileType: string, fileSize: number) {
  if (!allowedTypes.has(fileType)) {
    throw new Error("Unsupported file type. Upload PDF, JPG, PNG, or WebP files.");
  }
  if (fileSize > 10 * 1024 * 1024) {
    throw new Error("Maximum file size is 10MB.");
  }
}

export async function createSignedUpload({ fileName, fileType }: { fileName: string; fileType: string }) {
  const bucket = process.env.S3_BUCKET;
  const region = process.env.S3_REGION;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

  if (!bucket || !region || !accessKeyId || !secretAccessKey) {
    throw new Error("Secure upload storage is not configured.");
  }

  const client = new S3Client({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "-");
  const objectKey = `applications/${crypto.randomUUID()}-${safeName}`;
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: objectKey,
    ContentType: fileType,
    ServerSideEncryption: "AES256",
  });
  const uploadUrl = await getSignedUrl(client, command, { expiresIn: 300 });
  return { uploadUrl, objectKey };
}
