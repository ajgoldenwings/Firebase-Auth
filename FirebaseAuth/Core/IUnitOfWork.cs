using FirebaseAuthExample.Core.Repositories;

namespace FirebaseAuthExample.Core
{
    public interface IUnitOfWork
    {
        IFirebaseDB FirebaseDB { get; }
    }
}
