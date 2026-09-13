-- Publiek lezen van de fonts-bucket; schrijven alleen via service_role (bypasses RLS)
CREATE POLICY "Public read access to fonts bucket"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'fonts');