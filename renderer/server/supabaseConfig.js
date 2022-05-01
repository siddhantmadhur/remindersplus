import {
    createClient
} from '@supabase/supabase-js'


const server = createClient('https://pycguzlhszdxepuhkgyz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5Y2d1emxoc3pkeGVwdWhrZ3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTEzOTkxNjUsImV4cCI6MTk2Njk3NTE2NX0.uzpZML0DB-0glgSClqPJroVqrnM40VMfjbMsOD5XXTk')


export default server;