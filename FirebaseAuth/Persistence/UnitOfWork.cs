using FirebaseAuth.Core;
using FirebaseAuth.Core.Repositories;
using FirebaseAuth.Firebase;

namespace FirebaseAuth.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        public IFirebaseDB FirebaseDB { get; private set; }

        public UnitOfWork()
        {
            FirebaseDB = new FirebaseDB("https://parli-parrot.firebaseio.com/");
        }
    }
}
