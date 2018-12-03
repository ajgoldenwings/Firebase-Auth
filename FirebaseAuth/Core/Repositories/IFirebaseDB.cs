using FirebaseAuth.Firebase;

namespace FirebaseAuth.Core.Repositories
{
    public interface IFirebaseDB
    {
        FirebaseResponse Put(string jsonData);
        FirebaseDB Node(string node);
    }
}
