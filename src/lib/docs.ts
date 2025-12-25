import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

export function getDocSlugs() {
    // Recursive function to get all files
    function getFiles(dir: string): string[] {
        const subdirs = fs.readdirSync(dir);
        const files = subdirs.map((subdir) => {
            const res = path.join(dir, subdir);
            return fs.statSync(res).isDirectory() ? getFiles(res) : res;
        });
        return files.flat();
    }

    const files = getFiles(postsDirectory);
    return files.map(file => {
        const relativePath = path.relative(postsDirectory, file);
        // Replace all backslashes with forward slashes for URL routing
        return relativePath.replace(/\.md$/, '').split(path.sep).filter(Boolean);
    });
}

export function getDocBySlug(slug: string[]) {
    // Join with system path separator for file system access
    const realSlug = slug.join(path.sep);
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Doc not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        meta: data,
        content,
    };
}

export function getAllDocs() {
    const slugs = getDocSlugs();
    const docs = slugs.map((slug) => getDocBySlug(slug));
    return docs;
}
